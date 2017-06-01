package application.dao;

import org.springframework.data.repository.CrudRepository;

import application.dao.override.ICharacterDAO;
import application.entity.Character;

public interface CharacterDAO extends CrudRepository<Character, Integer>, ICharacterDAO{

}
