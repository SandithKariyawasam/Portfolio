import React from 'react'
import '../assets/vendor/css/inbox.css'
import '../assets/vendor/css/bootstrap-select.min.css'

const inbox = () => {
  return (
    <>
      <div id="main-wrapper">
        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="email-left-box px-0 mb-3">
                      <div className="p-0">
                        <a href="#" className="btn btn-primary btn-block">Compose</a>
                      </div>
                      <div className="mail-list mt-4">
                        <a href="email-inbox.html" className="list-group-item active"><i
                          className="fa fa-inbox font-18 align-middle me-2"></i> Inbox <span
                            className="badge badge-secondary badge-sm float-end">198</span> </a>
                        <a href="javascript:void()" className="list-group-item"><i
                          className="fa fa-paper-plane font-18 align-middle me-2"></i>Sent</a> <a
                            href="javascript:void()" className="list-group-item"><i
                              className="fa fa-star font-18 align-middle me-2"></i>Important <span
                                className="badge badge-danger text-white badge-sm float-end">47</span>
                        </a>
                        <a href="javascript:void()" className="list-group-item">
                          <i class="fa-solid fa-pen"></i>Draft</a><a
                            href="javascript:void()" className="list-group-item"><i
                              className="fa fa-trash font-18 align-middle me-2"></i>Trash</a>
                      </div>
                    </div>
                    <div className="email-right-box ms-0 ms-sm-4 ms-sm-0">
                      <div role="toolbar" className="toolbar ms-1 ms-sm-0">
                        <div className="btn-group mb-1">
                          <button className="btn btn-primary light px-3" type="button">
                            <i class="fa-solid fa-arrows-rotate"></i>
                          </button>
                        </div>
                        <div className="btn-group mb-1">
                          <button aria-expanded="false" data-bs-toggle="dropdown"
                            className="btn btn-primary px-3 light dropdown-toggle" type="button">More
                            <span className="caret"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a href="javascript: void(0);" className="dropdown-item">Mark as Unread</a>
                            <a href="javascript: void(0);" className="dropdown-item">Add to Tasks</a>
                            <a href="javascript: void(0);" className="dropdown-item">Add Star</a>
                            <a href="javascript: void(0);" className="dropdown-item">Mute</a>
                          </div>
                        </div>
                      </div>
                      <div className="email-list mt-3">
                        <div className="message">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Ingredia Nutrisha, A collection of textile
                              samples lay spread out on the table - Samsa was a travelling
                              salesman - and above it there hung a picture</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Pointing has no control about the blind texts
                              it is an almost unorthographic life One day however a small line
                              of blind text by the name of</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message unread">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Ingredia Nutrisha, A collection of textile
                              samples lay spread out on the table - Samsa was a travelling
                              salesman - and above it there hung a picture</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Pointing has no control about the blind texts
                              it is an almost unorthographic life One day however a small line
                              of blind text by the name of</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message unread">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Ingredia Nutrisha, A collection of textile
                              samples lay spread out on the table - Samsa was a travelling
                              salesman - and above it there hung a picture</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Pointing has no control about the blind texts
                              it is an almost unorthographic life One day however a small line
                              of blind text by the name of</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                        <div className="message unread">
                          <div className="d-flex message-single">
                            <div className="ps-1 align-self-center">
                              <label class="checkbox-btn">
                                <label for="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <a href="email-read.html" className="col-mail col-mail-2">
                            <div className="subject">Ingredia Nutrisha, A collection of textile
                              samples lay spread out on the table - Samsa was a travelling
                              salesman - and above it there hung a picture</div>
                            <div className="date">11:49 am</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default inbox
