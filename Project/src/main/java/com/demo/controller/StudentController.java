package com.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.entities.Student;
import com.demo.exception.ResourceNotFoundException;
import com.demo.repository.StudentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value ="api/v1")
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;
	
	// get all student
	@GetMapping("/students")
	public List<Student> getAllStudent() {
		return studentRepository.findAll();
	}
	
	// get student by id rest api
	@GetMapping("students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
		Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));
		return ResponseEntity.ok(student);
	}
	
	//get student by code student rest api
	@GetMapping("students/searchStudent")
	public ResponseEntity<List<Student>> findStudent(@RequestParam("codeStudent") String codeStudent, @RequestParam("fullname") String fullname) {
		String codeStu = codeStudent.replaceAll("\\s+", " ").trim().toUpperCase();
		String name = fullname.replaceAll("\\s+", " ").trim();
		List<Student> list = null;
		if(codeStu == "" && name != "") {
			list = studentRepository.findByNameStudent(name);
		} else if (codeStu != "" && fullname == "") {
			list = studentRepository.findByCodeStudent(codeStu);
		} else {
			list = studentRepository.findStudent(codeStu, name);
		}
		
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/import")
	public void mapReapExcelDataToDB(@RequestParam("file") MultipartFile reapExcelDataFile) throws IOException {
		List<Student> temStudentList = new ArrayList<Student>();
		XSSFWorkbook wb = new XSSFWorkbook(reapExcelDataFile.getInputStream());
		XSSFSheet ws = wb.getSheetAt(0);
		for(int i=5; i < ws.getPhysicalNumberOfRows(); i++) {
			Student student = new Student();
			XSSFRow row = ws.getRow(i);
//			student.setId((int) row.getCell(0).getNumericCellValue());
			student.setNameSchool(row.getCell(1).getStringCellValue());
			student.setDistrict(row.getCell(2).getStringCellValue());
			student.setCodeStudent(row.getCell(3).getStringCellValue().replaceAll("\n", ""));
			student.setClassroom(row.getCell(4).getStringCellValue());
			student.setFullname(row.getCell(5).getStringCellValue());
			student.setDate(Integer.parseInt(row.getCell(6).getStringCellValue()));
			student.setMonth(Integer.parseInt(row.getCell(7).getStringCellValue()));
			student.setYear(Integer.parseInt(row.getCell(8).getStringCellValue()));
			student.setGender(Boolean.parseBoolean(row.getCell(9).getStringCellValue()));
			student.setBirthplace( row.getCell(10).getStringCellValue());
			student.setEthnic(row.getCell(11).getStringCellValue());
			student.setPermanentResidence(row.getCell(12).getStringCellValue());
			student.setPhoneNumber(row.getCell(13).getStringCellValue());
			student.setPoint1((int) row.getCell(14).getNumericCellValue());
			student.setPoint2((int) row.getCell(15).getNumericCellValue());
			student.setPoint3((int) row.getCell(16).getNumericCellValue());
			student.setPoint4((int) row.getCell(17).getNumericCellValue());
			student.setPoint5((int) row.getCell(18).getNumericCellValue());
			student.setSumCore((int) row.getCell(19).getNumericCellValue());
			student.setPriorityPoint((int) row.getCell(20).getNumericCellValue());
			student.setTotalPoint((int) row.getCell(21).getNumericCellValue());
			student.setNote(row.getCell(22).getStringCellValue());
			temStudentList.add(student);
		}
		for(Student temp : temStudentList) {
			if(studentRepository.findByCodeStudent(temp.getCodeStudent()) != null)
				continue;
			studentRepository.save(temp);
		}
	}
	
}
