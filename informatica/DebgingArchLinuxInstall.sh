#!/bin/bash

# Función para solicitar confirmación
confirm() {
    read -p "$1 (s/n) [Para cancelar pulsa Ctrl+C]: " choice
    case "$choice" in 
        s|S ) return 0;;
        n|N ) return 1;;
        * ) echo "Por favor, responde 's' o 'n'."; confirm "$1";;
    esac
}

# Verificar servicios con problemas
if confirm "¿Deseas verificar servicios de systemd con problemas?"; then
    systemctl --failed
    journalctl -p 3 -xb
fi

# Verificar y configurar mirror para España
if confirm "¿Deseas verificar y configurar un buen mirror para España?"; then
    if ! grep -q "^Server = https://mirror.cloroformo.org/archlinux" /etc/pacman.d/mirrorlist; then
        echo "Configurando mirror español..."
        echo "Server = https://mirror.cloroformo.org/archlinux/\$repo/os/\$arch" | sudo tee -a /etc/pacman.d/mirrorlist
    else
        echo "Ya está configurado un buen mirror para España."
    fi
fi

# Actualizar el sistema
if confirm "¿Deseas actualizar el sistema?"; then
    paru -Syu
fi

# Limpiar la caché de paquetes
if confirm "¿Deseas limpiar la caché de paquetes?"; then
    paru -Sc
fi

# Eliminar paquetes huérfanos
if confirm "¿Deseas eliminar paquetes huérfanos?"; then
    paru -Rns $(paru -Qtdq)
fi

# Usar paccache para mantener solo versiones recientes de paquetes
if confirm "¿Deseas usar paccache para limpiar paquetes antiguos?"; then
    sudo paccache -r
fi

# Actualizar GRUB
if confirm "¿Deseas actualizar GRUB?"; then
    sudo grub-mkconfig -o /boot/grub/grub.cfg
fi

# Limpiar la caché de usuario
if confirm "ADVERTENCIA: ¿Deseas limpiar la caché de usuario? Esto puede afectar a algunas aplicaciones."; then
    rm -rf ~/.cache/*
fi

echo "Mantenimiento completado."
