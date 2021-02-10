if ( $args.Length -eq 0) {
    Write-Error "Provide Challenge Number"
    exit
}

$ROOT_DIR = (Get-Item (pwd).path).Parent.FullName

$DIR_PREFIX = $ROOT_DIR + "\challenges\Coding_Challenge_#"

$TEMPLATE_PREFIX = $ROOT_DIR + "\init\templates\*"

$ProjectPath = $DIR_PREFIX + $args[0]

function createCC {

    mkdir $ProjectPath
    if ($?) {

        Copy-Item  -Path $TEMPLATE_PREFIX -Destination ($ProjectPath)
    }
    
}




$ProjectExists = Test-Path ($ProjectPath)

if (-NOT($ProjectExists)) {

    Write-Output("Creating Coding Challenge #{0} boilerplate" -f $args[0])
    createCC
    
}

if ($?) {

    if (Get-Command code -ErrorAction SilentlyContinue) {

        Write-Output("Opening Coding Challenge #{0} in VScode." -f $args[0])
        code ($ProjectPath)
    }
    else {

        Write-Error("VScode not Found. Not opening project")
    }
    
}

else {

    Write-Error "Couldn't Create Project."
}
