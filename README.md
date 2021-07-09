# restapikeycloakjwt

## Technologies used
Spring Framework, Angular, PostgreSQL, Keycloak, Docker

## Project installation
```bash
git clone https://github.com/hexdump95/restapikeycloakjwt.git
```
## (Option A) Run with Docker Compose

### Prerequisites
* Docker
* Docker Compose

### Setting environment variables
create an .env file with the environment variables as shown in the .env.example

### Build and run containers
```bash
docker-compose up
```
### After keycloak service starts you have to create a user:
```bash
docker-compose exec -d keycloak sh /opt/jboss/keycloak/bin/add-user-keycloak.sh -r sergio -u username -p password
```
```bash
docker-compose restart keycloak
```
### The client service will be running on http://localhost
