package com.example.service;

import com.example.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface ITicketService {
    List<Ticket> findAll();

    Optional<Ticket> findById(Integer id);

    void save(Ticket ticket);

    List<Ticket> search(String start, String end, String startDay, String endDay);

    Optional<Ticket> findTicketById(int id);
}
