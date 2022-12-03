package com.example.service.impl;

import com.example.model.Ticket;
import com.example.repository.ITicketRepository;
import com.example.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService implements ITicketService {

    @Autowired
    private ITicketRepository ticketRepository;

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findTickAll();
    }

    @Override
    public Optional<Ticket> findById(Integer id) {
        return ticketRepository.findById(id);
    }

    @Override
    public void save(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> search(String start, String end, String startDay, String endDay) {
        return ticketRepository.search(start, end, startDay, endDay);
    }

    @Override
    public Optional<Ticket> findTicketById(int id) {
        return ticketRepository.findTicketById(id);
    }
}
