<div class="row">
  <div class="col-md-8">

    <div class="row">
        <div class="col-sm-3 col-md-2 ">
            <img src="{{ photo | prepend: "photos/128-" | append: ".jpg"}}" alt="{{ student.name }} photo" class="detailsphoto">
        </div>
        <div class="col-sm-8 col-md-10">
            <h1 class="title">Robin Hood</h1>
            <div class="row">
                <div class="col-md-6">
                    <dl class="row">
                      <dt class="col-sm-4">StudentID</dt>
                      <dd class="col-sm-8">10282116</dd>

                      <dt class="col-sm-4">Email</dt>
                      <dd class="col-sm-8"><a href="mailto:abc1xyz@nottingham.ac.uk">abc1xyz@nottingham.ac.uk</a></dd>
                      
                    </dl>
                </div>
                <div class="col-md-6">
                    <dl class="row">
                      <dt class="col-sm-5">Status</dt>
                      <dd class="col-sm-7">Registered  <i>(29.9.22)</i></dd>

                      <dt class="col-sm-5">Form of study</dt>
                      <dd class="col-sm-7"><span class="material-symbols-sharp hilight">error</span><b>Mobility</b></dd>

                    </dl>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
