#!/bin/bash

# Script para subir el proyecto Segue 2026 a GitHub
# Uso: ./push-to-github.sh TU_USUARIO_GITHUB

if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar tu nombre de usuario de GitHub"
    echo "Uso: ./push-to-github.sh TU_USUARIO_GITHUB"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME="segue-2026-next"

echo "🚀 Configurando repositorio remoto..."
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo "📤 Subiendo código a GitHub..."
git branch -M main
git push -u origin main

echo "✅ ¡Código subido exitosamente!"
echo "🔗 Tu repositorio: https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "📋 Próximo paso:"
echo "   Ve a https://vercel.com/new e importa este repositorio"
