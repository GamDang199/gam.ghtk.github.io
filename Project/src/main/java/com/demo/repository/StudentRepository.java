package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	@Query("select s from Student s where s.codeStudent = :codeStudent")
	Student findByCodeStudent(@Param("codeStudent") String codeStudent);
}
