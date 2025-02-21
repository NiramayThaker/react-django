from flask import request, jsonify
from config import app, db
from models import Contact

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda contact: contact.to_json(), contacts))
    return jsonify(json_contacts)


@app.route("/create_contacts", methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    if not first_name or not last_name or not email:
        return (
            jsonify({"error": "Missing data"}), 
            400
        )
    
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        # Staging the data
        db.session.add(new_contact)

        # Commit the data
        db.session.commit()
    except Exception as e:
        return (
            jsonify({"error": str(e)}),
            400
        )

    return jsonify({"success": "Data added successfully"}), 201

    # data = request.get_json()
    # new_contact = Contact(first_name=data["firstName"], last_name=data["lastName"], email=data["email"])
    # db.session.add(new_contact)
    # db.session.commit()
    # return jsonify(new_contact.to_json())

if __name__ == "__main__":

    # Create DB if it doesn't exist
    with app.app_context():
        db.create_all()

    app.run(debug=True)
