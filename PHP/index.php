<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
</head>
<body>
    <div class="container">
        <div class="row">
            <?php include("template/cabecera.php");?>
            <div class="jumbotron">
                <h1 class="display-3">Jumbo heading</h1>
                <p class="lead">Jumbo helper text</p>
                <hr class="my-2">
                <p>More info</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
            </div>
        </div>
    </div>
    <?php include("template/pie.php");?>
</body>

</html>