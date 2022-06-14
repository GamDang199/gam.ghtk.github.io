package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.User;
import com.demo.exception.ResourceNotFoundException;
import com.demo.repository.UserRepository;

@RestController
@RequestMapping("/api/v1")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	//get all user
	@GetMapping("/user")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	// create user rest api
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	// get user by id rest api
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Integer id){
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
		return ResponseEntity.ok(user);
	}
	
	// update user rest api
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetail){
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
		user.setUsername(userDetail.getUsername());
		user.setPassword(userDetail.getPassword());
		user.setEmail(userDetail.getEmail());
		user.setDateOfBirth(userDetail.getDateOfBirth());
		user.setAddress(userDetail.getAddress());
		user.setPhoneNumber(userDetail.getPhoneNumber());
		user.setRole(userDetail.getRole());
		user.setGender(userDetail.getGender());
		User updateUser = userRepository.save(user);
		
		
		return ResponseEntity.ok(updateUser);
	
	}
	
	//delete user rest api
	@DeleteMapping("/user/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Integer id){
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
