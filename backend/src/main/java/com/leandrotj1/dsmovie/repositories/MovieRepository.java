package com.leandrotj1.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leandrotj1.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	
	
}
