package com.example.controller;

import com.example.dto.TicketDTO;
import com.example.model.Ticket;
import com.example.service.ITicketService;
import com.example.service.impl.TicketService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/tickets")
public class TicketRestController {
    @Autowired
    private ITicketService ticketService;

//    @GetMapping("")
//    public ResponseEntity<List<Ticket>> findAllTicket() {
//        List<Ticket> ticketList = ticketService.findAll();
//        return new ResponseEntity<>(ticketList, HttpStatus.OK);
//    }
    @GetMapping("")
    public ResponseEntity<List<TicketDTO>> findAllTicket() {
        List<Ticket> ticketList = ticketService.findAll();
        List<TicketDTO> ticketDTOList = new ArrayList<>();
        ticketList.forEach(ticket -> {
            TicketDTO ticketDTO = new TicketDTO();
            BeanUtils.copyProperties(ticket, ticketDTO);
            ticketDTOList.add(ticketDTO);
        });
        return new ResponseEntity<>(ticketDTOList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable() int id) {
        Optional<Ticket> ticketOptional = ticketService.findById(id);
        if(!ticketOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ticketOptional.get(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketDTO> updateTicket(@PathVariable int id, @RequestBody TicketDTO ticketDTO) {
        Optional<Ticket> ticketOptional = ticketService.findTicketById(id);
        if(ticketOptional.isPresent()) {
            Ticket ticket = new Ticket();
            BeanUtils.copyProperties(ticketDTO, ticket);
            ticketService.save(ticket);
            return new ResponseEntity<>(ticketDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("")
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        ticketService.save(ticket);
        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable int id) {
        Optional<Ticket> ticketOptional = ticketService.findById(id);
        if(ticketOptional.isPresent()) {
            Ticket ticket = ticketOptional.get();
            ticket.setStatus(true);
            ticketService.save(ticket);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Ticket>> search(@RequestParam(required = false, defaultValue = "") String start,
                                               @RequestParam(required = false, defaultValue = "") String end,
                                               @RequestParam(required = false, defaultValue = "") String startDay,
                                               @RequestParam(required = false, defaultValue = "") String endDay) {
        List<Ticket> ticketList = ticketService.search(start, end, startDay, endDay);
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }
}
