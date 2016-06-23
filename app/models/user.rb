class User < ActiveRecord::Base

  def update_user_session
    generate_session_id
    self.save
  end

  private

  def generate_session_id
    begin
      self.session_id = SecureRandom.hex
    end while self.class.exists?(session_id: session_id)
  end
end
