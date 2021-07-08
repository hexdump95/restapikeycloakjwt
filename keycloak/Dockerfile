FROM jboss/keycloak:14.0.0
COPY realm-export.json /tmp/realm-export.json
ENV KEYCLOAK_IMPORT /tmp/realm-export.json
CMD ["-Djboss.socket.binding.port-offset=101"]
