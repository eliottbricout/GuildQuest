package application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import application.entity.Biome;
import application.service.BiomeService;

@RestController
@RequestMapping("/biome")
public class BiomeController {

	@Autowired
	private BiomeService biomeService;

	@RequestMapping(value = "/{idBiome}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String getBiome(@PathVariable("idBiome") Integer idBiome) {
		Biome biome = this.biomeService.find(idBiome);
		if (biome != null) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				return mapper.writeValueAsString(biome);
			} catch (JsonProcessingException e) {
				return null;
			}
		} else {
			return null;
		}
	}
}
