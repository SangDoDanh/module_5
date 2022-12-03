package com.example.repository;

import com.example.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ITicketRepository extends JpaRepository<Ticket, Integer> {

    @Query(value = "select * from ticket t where t.status = false", nativeQuery = true)
    List<Ticket> findTickAll();

    @Query(value = "select * " +
            "from ticket t " +
            "where t.status = false " +
            "  and t.start like %:start% " +
            "  and t.end like %:end% " +
            "  and DATE(t.start_day) BETWEEN date(:startDay) AND date(:endDay)",
            nativeQuery = true)
    List<Ticket> search(@Param("start") String start,
                        @Param("end") String end,
                        @Param("startDay") String startDay,
                        @Param("endDay") String endDay);

    @Query(value = "select * \n" +
            "from ticket t \n" +
            "where t.id = :id " +
            "and t.status = false",
            nativeQuery = true)
    Optional<Ticket> findTicketById(@Param("id") int id);
}
