var carObject = {
  vehicle: 'car',
  imageUrl:
    'https://images.unsplash.com/photo-1520031441872-265e4ff70366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1lcmNlZGVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
  farePerKilo: 3,
  capacity: 4,
  discription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
};

var bikeObject = {
  vehicle: 'bike',
  imageUrl:
    'https://images.unsplash.com/photo-1629294148914-678ba902dd49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yYmlrZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
  farePerKilo: 5,
  capacity: 2,
  discription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
};

var busObject = {
  vehicle: 'bus',
  imageUrl:
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
  farePerKilo: 2,
  capacity: 30,
  discription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
};

const serviceArray = [carObject, busObject, bikeObject];
function displayServices(service) {
  const mainsection = document.getElementById('main-section');
  const stringified = JSON.stringify(service);
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src=${service.imageUrl}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${service.vehicle}</h5>
              <p class="card-text">
                ${service.discription}
              </p>
              <p class="card-text"><small class="text-muted">Fare Per Kilo:${service.farePerKilo}</small> <small class="text-muted">Capacity:${service.capacity}</small></p>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick='handleBooking(${stringified})'>
              Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
  
  `;

  mainsection.appendChild(div);
  //   console.log(stringified);
}

function displayAllArticales(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    displayServices(element);
  }
}
displayAllArticales(serviceArray);

function handleBooking(obj) {
  const modalBody = document.getElementById('modal-body');
  const stringifiedObj = JSON.stringify(obj);
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mode:${obj.vehicle}</h5>
    <p class="card-text">${obj.discription}</p>
    <p class="card-text"><small class="text-muted">Fare Per Kilo:${obj.farePerKilo}</small> <small class="text-muted">Capacity:${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
        <p>Fare:<small class="text-muted" id="fare"></small></p>
        <p>Tax:<small class="text-muted" id="tax"></small></p>
        <p>Total Cost:<small class="text-muted" id="total-cost"></small></p>
        <input class="form-control m-2" id='distance-input'
        } type="number" placeholder="Distance" aria-label="Search" />

        <input class="form-control m-2" id= 'quantity-input'
        } type="number" placeholder="Quantity" aria-label="Search"/>

        <button class="btn btn-outline-success" id="search-btn" type="submit" onClick='calculateCost(${stringifiedObj})'>Submit</button>
        </div>
    </div>
</div>
  
  `;
  //   modalBody.appendChild('div');
  obj.appendChild(modalBody);
}

// document.getElementById('search-btn').addEventListener("click",);

function calculateCost(obj) {
  const distance = document.getElementById('distance-input').value;
  const quantity = document.getElementById('quantity-input').value;
  //   console.log(distance, quantity);

  const fare = document.getElementById('fare');
  fare.innerHTML = distance * quantity * obj.farePerKilo;

  const tax = document.getElementById('tax');
  tax.innerHTML = 10 + '%';

  console.log(obj.farePerKilo);

  const total_cost = document.getElementById('total-cost');
  total_cost.innerHTML =
    distance * quantity * obj.farePerKilo +
    distance * quantity * obj.farePerKilo * 0.1;
}

document.getElementById('search-btn').addEventListener('click', function () {
  const value = document.getElementById('search-input').value;

  //   for (let i = 0; i < serviceArray.length; i++) {
  //     let element = serviceArray[i];
  //     value.toLowerCase() === element.vehicle.toLowerCase()
  //       ? (document.getElementById('main-section').innerHTML =
  //           '' && displayServices(element))
  //       : alert('Not found');
  //   }

  for (let i = 0; i < serviceArray.length; i++) {
    const element = serviceArray[i];
    if (value.toLowerCase() === element.vehicle.toLowerCase()) {
      //   console.log(element.vehicle);
      document.getElementById('main-section').innerHTML = '';
      displayServices(element);
      return;
    }
    // alert('nothing found with your input');
  }

  alert('nothing found with your input');
});
