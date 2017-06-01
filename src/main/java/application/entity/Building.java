package application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Building {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected Integer buildingId;
	
	@Column(name="nom")
	protected String name;
	
	@ManyToOne
	@JoinColumn(name="biome_id")
	protected Biome biome;
	
	public Building() {
		
	}
	
	public Integer getBuildingId() {
		return buildingId;
	}
	
	public void setBuildingId(Integer buildingId) {
		this.buildingId = buildingId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

}
