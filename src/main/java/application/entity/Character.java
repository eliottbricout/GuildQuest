package application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="personnage")
public class Character {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected Integer characterId;
	
	@Column(name="nom")
	protected String name;
	
	@ManyToOne
	@JoinColumn(name="biome_id")
	protected Biome biome;
	
	public Character() {
		
	}
	
	public Integer getCharacterId() {
		return characterId;
	}
	
	public void setCharacterId(Integer characterId) {
		this.characterId = characterId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Biome getBiome() {
		return biome;
	}
	
	public void setBiome(Biome biome) {
		this.biome = biome;
	}

}
