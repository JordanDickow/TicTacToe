'use strict'
curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request 'POST' \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
