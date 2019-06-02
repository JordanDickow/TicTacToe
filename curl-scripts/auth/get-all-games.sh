curl "https://tic-tac-toe-wdi.herokuapp.com/games"
  --include \
  --request GET \
  --header "Content-Type: application/json"
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
