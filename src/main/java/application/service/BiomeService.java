package application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import application.dao.BiomeDAO;
import application.dao.CharacterDAO;
import application.entity.Biome;

@Component
public class BiomeService {
	
	@Autowired
	protected CharacterDAO characterDAO;
	
	@Autowired
	protected BiomeDAO biomeDAO;

	public Biome find(Integer idBiome) {
		return this.biomeDAO.findOne(idBiome);
	}
	

}
