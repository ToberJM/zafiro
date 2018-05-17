<?php
class ControladorPlantilla{
	public function ctrEstiloPlantilla(){
		$tabla = "plantilla";
		$respuesta = ModeloPlantilla::mdlEstiloPlantilla($tabla);
		return $respuesta;
	}	
}