INSERT INTO department (name, id)
VALUES
    ('Human Resources', 1),
    ('Sales', 2),
    ('Legal', 3),
    ('Engineering', 4);

INSERT INTO role (id, title, salary, department_id)
VALUES 
    (1, 'HR Manager', 70000, 1),
    (2, 'HR Lead', 50000, 1),
    (3, 'Sales Manager', 70000, 2),
    (4, 'Sales Lead', 50000, 2),
    (5, 'Lead Attorney', 100000, 3),
    (6, 'Paralegal', 80000, 3),
    (7, 'Senior Engineer', 100000, 4),
    (8, 'Lead Engineer', 80000, 4);