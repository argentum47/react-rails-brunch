class WelcomeController < ApplicationController
  def index
    remote_ip = request.remote_ip
    User.find_or_create_by!(remote_ip: remote_ip)

    @verified = verify_user_cookies(remote_ip)
  end

  def verify
    answer = params[:answer]
    md5 = Digest::MD5.new << answer.downcase

    answers = get_answer_from_cookie

    if answers.include?(md5.hexdigest)
      @user = User.find_by(remote_ip: request.remote_ip)
      @user.update_user_session
      set_cookies(@user.session_id)
    end
    redirect_to root_url
  end

  def human
    @captcha = Textcaptcha.get_captcha("example")
    save_answer_in_cookie(@captcha["a"])
  end

  private

  def get_answer_from_cookie
    answers = cookies.signed[:answers]
    cookies.delete :answers
    JSON.parse answers
  end

  def save_answer_in_cookie(answers)
    cookies.signed[:answers] = {
      value: JSON.generate(answers),
      expires: 1.hour.from_now,
    }
  end

  def set_cookies(session_id)
    cookies.signed[:credentials] = { value: session_id, expires: 1.day.from_now }
  end

  def verify_user_cookies(ip)
    if cookies.signed[:credentials]
      User.exists?(session_id: cookies.signed[:credentials], remote_ip: ip)
    end
  end
end
