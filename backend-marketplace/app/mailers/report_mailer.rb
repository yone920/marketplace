class ReportMailer < ApplicationMailer
  default from: "accesslabshoppingtest@gmail.com"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.report_mailer.order_confirmation.subject
  #
  def order_confirmation(user)
    # byebug
    @user = user
    mail to: user.email, subject: "Order Confirmation"
  end
end
