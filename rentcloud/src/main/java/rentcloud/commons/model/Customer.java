package rentcloud.commons.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue
    int id;
    String firstName;
    String lastName;
    String dlNumber;
    String zipCode;

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getDlNumber() {
        return dlNumber;
    }

    public String getZipCode() {
        return zipCode;
    }
}

