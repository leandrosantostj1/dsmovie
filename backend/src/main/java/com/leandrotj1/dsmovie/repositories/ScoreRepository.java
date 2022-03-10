package com.leandrotj1.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leandrotj1.dsmovie.entities.Score;
import com.leandrotj1.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
	
	
}
