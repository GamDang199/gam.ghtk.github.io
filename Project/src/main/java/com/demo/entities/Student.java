package com.demo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Student")
public class Student implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "nameSchool")
	private String nameSchool;
	
	@Column(name = "district")
	private String district;
	
	@Column(name = "codeStudent", unique = true)
	private String codeStudent;
	
	@Column(name = "classroom")
	private String classroom;
	
	@Column(name = "fullname")
	private String fullname;
	
	@Column(name = "date")
	private Integer date;
	
	@Column(name = "month")
	private Integer month;
	
	@Column(name = "year")
	private Integer year;
	
	@Column(name = "gender")
	private Boolean gender;
	
	@Column(name = "birthplace")
	private String birthplace;
	
	@Column(name = "ethnic")
	private String ethnic;
	
	@Column(name = "permanentResidence")
	private String permanentResidence;
	
	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	@Column(name = "point1")
	private Integer point1;
	
	@Column(name = "point2")
	private Integer point2;
	
	@Column(name = "point3")
	private Integer point3;
	
	@Column(name = "point4")
	private Integer point4;
	
	@Column(name = "point5")
	private Integer point5;
	
	@Column(name = "sumCore")
	private Integer sumCore;
	
	@Column(name = "priorityPoint")
	private Integer priorityPoint;
	
	@Column(name = "totalPoint")
	private Integer totalPoint;
	
	@Column(name = "note")
	private String note;
	public Student() {
		// TODO Auto-generated constructor stub
	}
	public Student(String nameSchool, String district, String codeStudent, String classroom, String fullname, Integer date,
			Integer month, Integer year, Boolean gender, String birthplace, String ethnic, String permanentResidence,
			String phoneNumber, Integer point1, Integer point2, Integer point3, Integer point4, Integer point5,
			Integer sumCore, Integer priorityPoint, Integer totalPoint, String note) {
		super();
//		this.id = id;
		this.nameSchool = nameSchool;
		this.district = district;
		this.codeStudent = codeStudent;
		this.classroom = classroom;
		this.fullname = fullname;
		this.date = date;
		this.month = month;
		this.year = year;
		this.gender = gender;
		this.birthplace = birthplace;
		this.ethnic = ethnic;
		this.permanentResidence = permanentResidence;
		this.phoneNumber = phoneNumber;
		this.point1 = point1;
		this.point2 = point2;
		this.point3 = point3;
		this.point4 = point4;
		this.point5 = point5;
		this.sumCore = sumCore;
		this.priorityPoint = priorityPoint;
		this.totalPoint = totalPoint;
		this.note = note;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNameSchool() {
		return nameSchool;
	}
	public void setNameSchool(String nameSchool) {
		this.nameSchool = nameSchool;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getCodeStudent() {
		return codeStudent;
	}
	public void setCodeStudent(String codeStudent) {
		this.codeStudent = codeStudent;
	}
	public String getClassroom() {
		return classroom;
	}
	public void setClassroom(String classroom) {
		this.classroom = classroom;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public Integer getDate() {
		return date;
	}
	public void setDate(Integer date) {
		this.date = date;
	}
	public Integer getMonth() {
		return month;
	}
	public void setMonth(Integer month) {
		this.month = month;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Boolean getGender() {
		return gender;
	}
	public void setGender(Boolean gender) {
		this.gender = gender;
	}
	public String getBirthplace() {
		return birthplace;
	}
	public void setBirthplace(String birthplace) {
		this.birthplace = birthplace;
	}
	public String getEthnic() {
		return ethnic;
	}
	public void setEthnic(String ethnic) {
		this.ethnic = ethnic;
	}
	public String getPermanentResidence() {
		return permanentResidence;
	}
	public void setPermanentResidence(String permanentResidence) {
		this.permanentResidence = permanentResidence;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Integer getPoint1() {
		return point1;
	}
	public void setPoint1(Integer point1) {
		this.point1 = point1;
	}
	public Integer getPoint2() {
		return point2;
	}
	public void setPoint2(Integer point2) {
		this.point2 = point2;
	}
	public Integer getPoint3() {
		return point3;
	}
	public void setPoint3(Integer point3) {
		this.point3 = point3;
	}
	public Integer getPoint4() {
		return point4;
	}
	public void setPoint4(Integer point4) {
		this.point4 = point4;
	}
	public Integer getPoint5() {
		return point5;
	}
	public void setPoint5(Integer point5) {
		this.point5 = point5;
	}
	public Integer getSumCore() {
		return sumCore;
	}
	public void setSumCore(Integer sumCore) {
		this.sumCore = sumCore;
	}
	public Integer getPriorityPoint() {
		return priorityPoint;
	}
	public void setPriorityPoint(Integer priorityPoint) {
		this.priorityPoint = priorityPoint;
	}
	public Integer getTotalPoint() {
		return totalPoint;
	}
	public void setTotalPoint(Integer totalPoint) {
		this.totalPoint = totalPoint;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
