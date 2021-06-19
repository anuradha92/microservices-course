package com.anuradha.rentcloud.auth.authserver02.model;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Data
@Entity
@Table(name = "permission")
public class Permission implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "name")
    private String name;
}
