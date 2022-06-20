package com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	@Query("select s from Student s where s.codeStudent like %:codeStudent%")
	List<Student> findByCodeStudent(@Param("codeStudent") String codeStudent);
	
	@Query("select s from Student s where s.fullname like %:fullname%")
	List<Student> findByNameStudent(@Param("fullname") String fullname);
	
	@Query("select s from Student s where s.codeStudent like %:codeStudent% and s.fullname like %:fullname%")
	List<Student> findStudent(@Param("codeStudent") String codeStudent, @Param("fullname") String fullname);
}
