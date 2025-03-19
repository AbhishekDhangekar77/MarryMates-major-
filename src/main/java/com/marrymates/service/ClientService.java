package com.marrymates.service;

import com.marrymates.model.Client;
import com.marrymates.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
	

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Long id, Client updatedClient) {
        return clientRepository.findById(id)
                .map(client -> {
                    client.setName(updatedClient.getName());
                    client.setEmail(updatedClient.getEmail());
                    client.setContactNumber(updatedClient.getContactNumber());
                    client.setAddress(updatedClient.getAddress());
                    client.setUserName(updatedClient.getUserName());
                    client.setPassword(updatedClient.getPassword());
                    return clientRepository.save(client);
                })
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Client getClientById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
