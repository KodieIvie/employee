$(function () {

	const url = 'https://randomuser.me/api/?results=12&nat=us';
	const employeeList = [];
	const $employees = $('#employees');

	const append = () => {

		$(...employeeList).each((i, val) => {
			console.log(val);
			 /* iterate through array or object */ 
			let $newDiv = $(`<div class="col-4 employee" id="${i}" data-toggle="modal" data-target="#modal${i}">
									<div class="photo">
										<img src=${val.picture.large} alt="" class="rounded-circle">
									</div>	
									<div class="details">
										<p class="name text-capitalize">${val.name.first} ${val.name.last}</p>
										<p class="email">${val.email}</p>
										<p class="text-capitalize city">${val.location.city}</p>
									</div>	
								</div>
							
<div class="modal fade" id="modal${i}">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title"></h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
		<div class="container">
			<div class="row">
				<div class="col text-center mdetails">
					<img src=${val.picture.large} alt="" class="rounded-circle">
					<p class="name text-capitalize">${val.name.first} ${val.name.last}</p>
					<p class="email">${val.email}</p>
					<p class="city text-capitalize">${val.location.city}</p>
					<hr class="w80 pt-1 pb-1">
					<p class="username">${val.login.username}</p>
					<p class="cell">${val.cell}</p>
					<p class="address text-capitalize">${val.location.street} ${val.location.city}, ${val.location.state} ${val.location.postcode}</p>
					<p class="bday">Birthday: ${val.dob.slice(5, 7)}/${val.dob.slice(8, 10)}/${val.dob.slice(2,4)}</p>
					<br>
				</div>
			</div>
		</div>
		</div>
      </div>
    </div>
  </div>
</div>

							`);

			$newDiv.appendTo($employees);
		});
	};
	

	$.get(url, (data) => {
		employeeList.push(data.results);
		append();
		modal();
	});

	const modal = () => {

	// listen for modal click
		$('#employees').on('click', (e) => {
			let $ind = e.target.id;
		});
	};







});

// Create a modal window that will pop up when any part of the user’s row is clicked. The following details should display in the modal window:
// Image
// Name
// Username
// Email
// Cell Number
// Detailed Address, including street name and number, city, country and post code.
// Birthdate


