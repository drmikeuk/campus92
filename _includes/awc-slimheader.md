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

                      <dt class="col-sm-4">Support plan</dt>
                      <dd class="col-sm-8"><a class="btn btn-sm btn-outline-primary" href="#SupportPlan" role="button" data-toggle="collapse"><span class="material-symbols-sharp solid smIcon">expand_circle_right</span>View support plan</a></dd>
                    </dl>
                </div>
                <div class="col-md-6">
                    <dl class="row">
                      <dt class="col-sm-5">Status</dt>
                      <dd class="col-sm-7">Registered  <i>(29.9.22)</i></dd>

                      <dt class="col-sm-5">Form of study</dt>
                      <dd class="col-sm-7"><span class="material-symbols-sharp hilight solid mdIcon">error</span><b>Mobility</b></dd>

                    </dl>
                </div>
            </div>

            <div id="SupportPlan" class="collapse in padBottom">
              <ol>
                <li>Extra time - 25% (Approved as of 3 November 2021)</li>
                <li>Extensions to deadlines, if possible, should be allowed on request. Student to discuss each request with module convenor/EC officer in their Home School. (Approved as of 3 November 2021)</li>
              </ol>
            </div>
        </div>
    </div>
  </div>
</div>
