<?php include "../template/cabecera.php"; ?>
<?php
$txtID = (isset($_POST['txtID'])) ? $_POST['txtID'] : "";
$txtNombre = (isset($_POST["txtNombre"])) ? $_POST["txtNombre"] : "";
$txtImagen = (isset($_FILES["txtImagen"]["name"])) ? $_FILES["txtImagen"]["name"] : "";
$accion = (isset($_POST["accion"])) ? $_POST["accion"] : "";

echo $txtID . "<br>";
echo $txtNombre . "<br>";
echo $txtImagen . "<br>";
echo $accion . "<br>";

switch ($accion) {
    case "Añadir":
        echo "Boton añadir pulsado";
        break;
    case "Modificar":
        echo "Boton modificar pulsado";
        break;
    case "Cancelar":
        echo "Boton cancelar pulsado";
        break;
    default:
        break;
}
?>

<div class="container">
    <div class="row">
        <div class="col-md-5">
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="txtID">ID: </label>
                    <input type="text" class="form-control" name="txtID" id="txtID" placeholder="ID">
                </div>

                <div class="form-group">
                    <label for="txtID">Nombre: </label>
                    <input type="text" class="form-control" name="txtNombre" id="txtNombre" placeholder="Nombre">
                </div>

                <div class="form-group">
                    <label for="txtImagen">Imagen: </label>
                    <input type="file" class="form-control" name="txtImagen" id="txtImagen" placeholder="Imagen">
                </div>

                <div class="btn-group" role="group">
                    <button type="submit" name="accion" value="Añadir" class="btn btn-success">Añadir</button>
                    <button type="submit" name="accion" value="Modificar" class="btn btn-warning">Modificar</button>
                    <button type="submit" name="accion" value="Cancelar" class="btn btn-info">Cancelar</button>
                </div>
            </form>


        </div>

        <div class="col-md-7">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Aprende php</td>
                        <td>imagen.php</td>
                        <td>Seleccionar | Borrar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php include "../template/pie.php"; ?>