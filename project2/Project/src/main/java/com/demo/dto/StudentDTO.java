package com.demo.dto;

import java.io.Serializable;

public class StudentDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String codeStudent;
	private String fullname;
	public StudentDTO() {
		// TODO Auto-generated constructor stub
	}
	public StudentDTO(String codeStudent, String fullname) {
		super();
		this.codeStudent = codeStudent;
		this.fullname = fullname;
	}
	public String getCodeStudent() {
		return codeStudent;
	}
	public void setCodeStudent(String codeStudent) {
		this.codeStudent = codeStudent;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
