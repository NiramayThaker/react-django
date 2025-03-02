from django.shortcuts import render
from .forms import RegistrationForm
from .models import Account

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

            user = Account.object.create_user(first_name=first_name, last_name=last_name, email=email, username=username, password=password)
            user.phone_number = phone_number 
            user.save()

    context = {
        'form': form
    }

    return render(request, 'user/register.html', context=context)

def login(request):
    return render(request, 'user/login.html')

def logout(request):
    return 