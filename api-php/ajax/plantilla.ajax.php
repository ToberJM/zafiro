<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "../controlers/plantilla.controlador.php";
require_once "../models/plantilla.modelo.php";
class AjaxPlantilla{
	public function ajaxEstiloPlantilla(){
		$respuesta = ControladorPlantilla::ctrEstiloPlantilla();
		echo json_encode($respuesta);
	}
}
$objeto = new AjaxPlantilla();
$objeto -> ajaxEstiloPlantilla();
