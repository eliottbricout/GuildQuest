package application.dao.override;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;

import application.dao.CharacterDAO;

public class CharacterDAOImpl implements ICharacterDAO{
	
	@PersistenceContext
	protected EntityManager em;
	
	@Autowired
	protected CharacterDAO characterDAO;

	@Override
	public void test() {
		
	}

}
