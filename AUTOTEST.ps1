param(
    [string]$dossier,
    [string]$temps = "N/A",
    [bool]$push = $true
)

if (-not $dossier) {
    Write-Host "❌ Erreur : Tu dois spécifier un dossier." -ForegroundColor Red
    exit 1
}

Write-Host "🧪 Lancement des tests Jest pour : $dossier" -ForegroundColor Cyan

# Lancement de npm test
npm test -- $dossier

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Tests au vert !" -ForegroundColor Green
    
    # --- PARTIE EXCEL ---
    $cheminFichier = "Suivi_Projet.xlsx"
    $dateActuelle = Get-Date -Format "dd/MM/yyyy HH:mm"
    
    $nouvelleLigne = [PSCustomObject]@{
        ID          = "s-$dossier"
        Date        = $dateActuelle
        "Durée (min)" = $temps
        Statut      = "Terminé"
    }

    # Tentative d'écriture Excel sans bloc Try complexe
    $nouvelleLigne | Export-Excel -Path $cheminFichier -Append -AutoSize -ErrorAction SilentlyContinue
    if ($?) { 
        Write-Host "📊 Ligne ajoutée au suivi Excel." -ForegroundColor Yellow 
    } else { 
        Write-Host "⚠️ Erreur Excel : Ferme le fichier !" -ForegroundColor Red 
    }

    # --- PARTIE GIT ---
    if ($push -eq $true) {
        Write-Host "📡 Envoi sur Git..." -ForegroundColor Cyan
        git add .
        git commit -m "Feat($dossier): finished in $temps min"
        git push
        Write-Host "🚀 Mission accomplie." -ForegroundColor Magenta
    } else {
        Write-Host "⚠️ Mode test : Pas de commit Git." -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Échec des tests. Opération annulée." -ForegroundColor Red
    exit 1
}