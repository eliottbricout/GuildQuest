package application.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Road {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected Integer roadId;
	
	@OneToOne
	@JoinColumn(name="building1_id")
	protected Building building1;
	
	@OneToOne
	@JoinColumn(name="building2_id")
	protected Building building2;
	
	@ManyToOne
	@JoinColumn(name="biome_id")
	protected Biome biome;

	public Road() {
		
	}
	
	public Integer getRoadId() {
		return roadId;
	}
	
	public void setRoadId(Integer roadId) {
		this.roadId = roadId;
	}
	
	public Building getBuilding1() {
		return building1;
	}
	
	public void setBuilding1(Building building1) {
		this.building1 = building1;
	}
	
	public Building getBuilding2() {
		return building2;
	}
	
	public void setBuilding2(Building building2) {
		this.building2 = building2;
	}

}
