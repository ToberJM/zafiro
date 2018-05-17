<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "../controlers/slide.controlador.php";
require_once "../models/slide.modelo.php";

class AjaxSlide{
	public function cargarSlide(){
		$respuesta = ControladorSlide::ctrMostrarSlide();
		echo json_encode($respuesta);
	}
}
$objeto = new AjaxSlide();
$objeto -> cargarSlide();