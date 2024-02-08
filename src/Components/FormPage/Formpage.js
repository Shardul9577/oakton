import React from 'react'
import './Formpage.css'

export default function Formpage() {
  return (
    <div>
      <form action="https://formsubmit.co/oaktontechuk@gmail.com" method="POST" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header form-1">
                <h1 class="modal-title fs-5 formtags" id="exampleModalLabel">REACH OUT</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body form-2"> 
                <p className='formtags'>Full Name :</p>
                <input type="name" class="form-control" id="floatingInput"/>

                <p className='formtags'>Email :</p>
                <input type="email" class="form-control" id="floatingPassword"/>


                <p className='formtags'>Organisation Name :</p>
                <input type="" class="form-control" id="floatingPassword"/>

                <p className='formtags'>Requirement Brief in 300 to 400 Words :</p>
                <input type="text" class="form-control" id="floatingPassword"/>

            </div>
            <div class="modal-footer form-1">
                    <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn">Save changes</button>
            </div>
            </div>
        </div>
      </form>
    </div>
  )
}
