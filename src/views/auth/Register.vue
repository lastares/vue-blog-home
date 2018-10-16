<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请注册</h3>
        </div>
        <div class="panel-body">

          <form method="POST" action="https://vuejscaff.com/auth/register" accept-charset="UTF-8">
            <input type="hidden" name="_token" value="J8SmQs71nmAJj9H1RbkHWSUVdrUDvrnbz8d2vPBP">

            <input type="hidden" name="remember" value="yes">

            <div class="form-group ">
              <label class="control-label" for="phone">手 机</label>
              <input class="form-control" name="phone" type="text" value="" placeholder="请填写手机号码" required>

            </div>

            <div class="form-group ">
              <label for="captcha" class="control-label">图片验证码</label>

              <div class="captcha-input">
                <input id="captcha" class="form-control" name="captcha" placeholder="请填写验证码" required autocomplete="off">

                <img class="thumbnail captcha" src="https://vuejscaff.com/captcha/flat?lz2TZ9WZ" onclick="this.src='/captcha/flat?'+Math.random()" title="点击图片重新获取验证码">

              </div>
            </div>

            <div class="form-group ">
              <label class="control-label" for="code">短信验证码</label>
              <div class="phone-input">
                <input class="form-control" name="code" type="text" value="" placeholder="请填写手机验证码" required>
                <button id="code" class="btn btn-info" type="button">获取验证码</button>
              </div>

            </div>

            <button type="submit" class="btn btn-lg btn-success btn-block">
              <i class="fa fa-btn fa-sign-in"></i> 注册
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .phone-input input {
    width: 65% !important;
    display: inline-block !important;
    float: left !important;
    margin-right: 5% !important;
  }
  .captcha-input img.captcha {
    margin-bottom: 0px !important;
    margin-top: 10px !important;
    cursor: pointer !important;
  }
</style>
