package application.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Biome {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected Integer biomeId;
	
	@Column(name="type_biome")
	protected String type;
	
	@OneToMany(mappedBy="biome")
	protected Set<Building> buildings;
	
	@OneToMany(mappedBy="biome")
	protected Set<Road> roads;
	
	@OneToMany(mappedBy="biome")
	protected Set<Character> characters;
	
	public Biome(){
		
	}
	
	public Integer getBiomeId() {
		return biomeId;
	}
	
	public void setBiomeId(Integer biomeId) {
		this.biomeId = biomeId;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public Set<Building> getBuildings() {
		return buildings;
	}
	
	public void setBuildings(Set<Building> buildings) {
		this.buildings = buildings;
	}
	
	public Set<Road> getRoads() {
		return roads;
	}
	
	public void setRoads(Set<Road> roads) {
		this.roads = roads;
	}

	public Set<Character> getCharacters() {
		return characters;
	}

	public void setCharacters(Set<Character> characters) {
		this.characters = characters;
	}
	
	
	
}
