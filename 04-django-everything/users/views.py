from django.shortcuts import render, redirect
from .forms import RegistrationForm
from django.contrib.auth.decorators import login_required
from .models import Account
from django.contrib import messages, auth

# Email imports
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage


# Create your views here.
def register(request):
    form = RegistrationForm()

    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            phone_number = form.cleaned_data['phone_number']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            username = email.split('@')[0]

            user = Account.objects.create_user(first_name=first_name, last_name=last_name, email=email, username=username, password=password)
            user.phone_number = phone_number 
            user.save()

            # USER ACTIVATION
            current_site = get_current_site(request)
            mail_subject = 'Please activate your account'

            message = render_to_string("user/user_verification_email.html", {
                'user': user,
                'domain': current_site,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': default_token_generator.make_token(user),
            })

            try:
                to_email = email 
                send_email = EmailMessage(mail_subject, message, to=[to_email])
                messages.success(request, 'email Successful!')
                send_email.send()
            except:
                print("Can't send email")

            # messages.success(request, 'Registration Successful!')
            return redirect('login')

    context = {
        'form': form
    }

    return render(request, 'user/register.html', context=context)

def login(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = auth.authenticate(email=email, password=password)

        if user is not None:
            auth.login(request, user)
            # messages.success(request, "You are now logged in")
            return redirect('home')
        else:
            messages.error(request, "Invaid login credentials")
            return redirect('login')


    return render(request, 'user/login.html')


@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return redirect('home')


def activate(request):
    return
