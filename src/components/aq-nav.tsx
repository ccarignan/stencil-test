import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'aq-nav',
  styleUrl: 'aq-nav.less'
})
export class AqNav {

  @Prop() userImg: string;
  @Prop() userName: string;
  @Prop() userEmail: string;

  render() {
    return (
      <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">
          <span class="uk-navbar-item uk-logo">
            <slot name="logo"></slot>
          </span>
          <slot name="navigation"></slot>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li>
              <a href="#">Help</a>
              <div class="uk-navbar-dropdown aq-nav-dropdown-search" uk-dropdown="pos: bottom-right">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li><a href="#">Help Documents</a></li>
                  <li><a href="#">Submit a Support Ticket</a></li>
                  <li>
                    <div class="uk-inline">
                      <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                      <input class="uk-input" type="text" />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#"><span class="uk-icon" uk-icon="icon: bell"></span></a>
            </li>
            <li>
              <a href="#"><span class="uk-icon" uk-icon="icon: grid"></span></a>
              <div class="uk-navbar-dropdown" uk-dropdown="pos: bottom-right">
                <ul class="uk-nav uk-navbar-dropdown-nav uk-nav-parent-icon" uk-nav="multiple: true">
                  <li><a href="#">Acquia Cloud</a></li>
                  <li><a href="#">Acquia DAM</a></li>
                  <li><a href="#">Acquia Journey</a></li>
                  <li class="uk-parent">
                    <a href="#">Acquia Lift</a>
                    <ul class="uk-nav-sub">
                      <li><a href="#">Sub item</a></li>
                      <li><a href="#">Sub item</a></li>
                      <li><a href="#">Sub item</a></li>
                    </ul>
                  </li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="https://acquia.com">Acquia.com</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                { this.userImg
                  ? <img class="aq-nav-user-thumbnail" src={this.userImg} alt="Profile" />
                  : <span class="uk-icon" uk-icon="icon: user"></span>
                }
              </a>
              <div class="uk-navbar-dropdown aq-nav-dropdown-profile" uk-dropdown="pos: bottom-right">
                <div class="uk-grid-small" uk-grid>
                  <div class="uk-width-auto">
                    { this.userImg
                      ? <img class="aq-nav-user-avatar" src={this.userImg} alt="Profile" />
                      : <span class="uk-icon" uk-icon="icon: user; ratio: 3"></span>
                    }
                  </div>
                  <div class="uk-width-expand">
                    { this.userName
                      ? <div>{this.userName}</div>
                      : <div>Anonymous User</div>
                    }
                    <div>{this.userEmail}</div>
                  </div>
                </div>
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-nav-header">Account</li>
                  <li><a href="#">My Permissions</a></li>
                  <li><a href="#">Account Settings</a></li>
                  <li><a href="#">Subscription Info</a></li>
                  <li class="uk-nav-divider"></li>
                  <li class="uk-nav-header">Admin</li>
                  <li><a href="#">Billing Info</a></li>
                  <li><a href="#">Manage Users</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#">Sign Out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}
