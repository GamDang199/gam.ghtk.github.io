package com.demo.repository;

import java.util.List;

import com.demo.entities.User;

public interface IUserRepository {
	public List<User> getAllUsers();
	public User getUserById(int id);
	public List<User> getUserByName(String name);
	public void createUser(User user);
	public void updateUser(int id, String newInfo);
	public void updateUser(User user);
	public void deleteUser(int id);
	public boolean isUserExitById(int id);
	public boolean isUserExistByName(String name);
}
